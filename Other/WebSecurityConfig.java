package com.app.config;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.app.entities.Role;
import com.app.filters.JWTRequestFilter;

@EnableWebSecurity // Enable Spring Security
@Configuration // Configuration class
@EnableGlobalMethodSecurity(prePostEnabled = true) // Enable method-level security
public class WebSecurityConfig {

	
	@Autowired
	private JWTRequestFilter filter;

	// Configure BCryptPasswordEncoder bean
	@Bean
	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

	// Configure security filter chain
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
				// Enable CORS and disable CSRF
				.cors().and().csrf().disable()
				// Configure exception handling
				.exceptionHandling().authenticationEntryPoint((request, response, ex) -> {
					response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
				}).and()
				// Configure authorization rules
				.authorizeRequests()
				.antMatchers("/users/signup").permitAll()
				.antMatchers("/users/authenticate").permitAll()
				//.antMatchers("/books/**").permitAll()	
				.antMatchers("/Customer/**").hasRole("CUSTOMER")
				.antMatchers("/Employee/**").hasRole("EMPLOYEE")
				.antMatchers("/Manager/**").hasRole("MANAGER")
				
				.antMatchers("/swagger*/**", "/v*/api-docs/**").permitAll().antMatchers(HttpMethod.OPTIONS).permitAll()
				.anyRequest().authenticated().and()
				// Configure session management
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
				// Add JWT filter before UsernamePasswordAuthenticationFilter
				.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);

		return http.build();            
	}
	
	
	
	
	// Configure AuthenticationManager bean
	@Bean
	public AuthenticationManager authenticatonMgr(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
}



