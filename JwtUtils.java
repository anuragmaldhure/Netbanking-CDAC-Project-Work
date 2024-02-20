package com.app.jwt_utils;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.security.core.userdetails.UserDetails;

import com.app.entities.Role;
import com.app.service.CustomUserDetails;
import java.util.function.Function;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtils {

	@Value("${SECRET_KEY}")
	private String jwtSecret;

	@Value("${EXP_TIMEOUT}")
	private int jwtExpirationMs;

	// will be invoked by REST Controller(authentication controller) , upon
	// successful authentication
	public String generateJwtToken(Authentication authentication) {
		log.info("generate jwt token " + authentication);
		CustomUserDetails userPrincipal = (CustomUserDetails) authentication.getPrincipal();
		List<String> roles = userPrincipal.getAuthorities().stream().map(GrantedAuthority::getAuthority)
				.collect(Collectors.toList());
		System.out.println("Role of User : " + roles.get(0));

//JWT : userName,issued at ,exp date,digital signature(does not typically contain password , can contain authorities
		return Jwts.builder() // JWTs : a Factory class , used to create JWT tokens
				.setSubject((userPrincipal.getUsername())) // setting subject of the token(typically user name) :sets
				.claim("role", roles.get(0)).setIssuedAt(new Date())// Sets the JWT Claims iat (issued at) value of
																	// current date
				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))// Sets the JWT Claims exp
																					// (expiration) value.
				.signWith(SignatureAlgorithm.HS512, jwtSecret) // Signs the constructed JWT using the specified
																// algorithm with the specified key, producing a
																// JWS(Json web signature=signed JWT)

				// Using token signing algo : HMAC using SHA-512
				.compact();// Actually builds the JWT and serializes it to a compact, URL-safe string
	}

	// this method will be invoked by our custom filter
	public String getUserNameFromJwtToken(String token) {
		return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
	}

	public String getUserRoleFromJwtToken(String token) {
		
		Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
		System.out.println("In get role : "+claims.get("role").toString());
		return  claims.get("role").toString();
	}

	public String getUserIdFromJwtToken(String token) {
		Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
		return (String) claims.get("userId");
	}

	

	

	 //this method will be invoked by our custom filter
	public boolean validateJwtToken(String authToken) {
		System.out.println("In validate method");
		try {
			Jwts.parser().// Returns a new JwtParser instance used to parse JWT strings.
					setSigningKey(jwtSecret).// Sets the signing key used to verify JWT digital signature.
					parseClaimsJws(authToken);// Parses the signed JWT returns the resulting Jws<Claims> instance
												// throws exc in case of failures in verification
			return true;
		
		} catch (Exception e) {
			log.error("Invalid JWT : " + e.getMessage());
		}
		
		return false;
	}
}

