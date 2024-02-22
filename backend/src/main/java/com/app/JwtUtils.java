//package com.app;
//
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.security.Keys;
//
//import javax.annotation.PostConstruct;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.stereotype.Component;
//import io.jsonwebtoken.ExpiredJwtException;
//
//import com.app.entities.CustomUserDetails;
//
//import javax.crypto.SecretKey;
//import java.nio.charset.StandardCharsets;
//import java.util.Collection;
//import java.util.Date;
//import java.util.List;
//import java.util.stream.Collectors;
//import org.springframework.security.core.userdetails.UserDetails;
//
//
//@Component
//public class JwtUtils {
//    @Value("${SECRET_KEY}")
//    private String jwtSecretKey;
//    private SecretKey key;
//
//    @PostConstruct
//    public void init() {
//        key = Keys.hmacShaKeyFor(jwtSecretKey.getBytes(StandardCharsets.UTF_8));
//        System.out.println(key.toString());
//    }
//
//    public String generateJwtToken(Authentication authentication) {
//        CustomUserDetails principalUser = (CustomUserDetails) authentication.getPrincipal();
//
//        return Jwts.builder()
//                .subject(principalUser.getUsername())
//                .issuedAt(new Date())
//                .expiration((new Date((new Date()).getTime() + 20 * 60 * 1000))) // 20 mins for token before expiration
//                .claim("authorities", getAuthoritiesInString(principalUser.getAuthorities()))
//                .signWith(key)
//                .compact();
//    }
//
//    public Claims validateToken(String jwtToken) {
//        return Jwts.parser()
//                .verifyWith(key)
//                .build()
//                .parseSignedClaims(jwtToken)
//                .getPayload();
//    }
//    
////    public Claims validateJwtToken(String token) {
////        try {
////            return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
////        } catch (ExpiredJwtException e) {
////            // Handle token expiration by generating a new token if needed
////            // Implement logic to regenerate OTP or token
////            if (tokenNeedsRefresh(e)) {
////                return generateNewToken(); // Replace with your logic to generate a new token
////            }
////            return null; // Placeholder, replace with actual logic
////        }
////    }
////
////    private boolean tokenNeedsRefresh(ExpiredJwtException e) {
////        // Implement logic to determine if the token needs to be refreshed
////        // For example, check if the token expiration is within a certain threshold
////        // Return true if the token needs to be refreshed, false otherwise
////        return false; // Placeholder, replace with actual logic
////    }
////
////    private Claims generateNewToken() {
////        // Implement logic to generate a new token
////        // This could involve generating a new JWT token with updated expiration or generating a new OTP
////        // Return the new Claims object representing the new token
////        return null; // Placeholder, replace with actual logic
////    }
//
//
//    public List<GrantedAuthority> getAuthoritiesFromClaims(Claims claims) {
//        String authString = (String) claims.get("authorities");
//        return AuthorityUtils.commaSeparatedStringToAuthorityList(authString);
//    }
//
//    public String getAuthoritiesInString(Collection<? extends GrantedAuthority> authorities) {
//        return authorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));
//    }
//}