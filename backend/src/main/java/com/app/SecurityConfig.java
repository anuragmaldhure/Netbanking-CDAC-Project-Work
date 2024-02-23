package com.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.app.service.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig{

//    @Autowired
//    private JwtAuthenticationFilter jwtFilter;
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	    http.csrf(csrf -> csrf.disable())
	            .authorizeHttpRequests(auth -> auth
	                    .mvcMatchers("/**").permitAll() // Authorize everyone for all links
	                    .mvcMatchers("/swagger-ui/**", "/v*/api-doc*/**").permitAll()
	                    .mvcMatchers("/public", "/signup", "/signin").permitAll())
	            .logout(logout -> logout.disable()) // Disable logout
	            .formLogin(form -> form.disable()) // Disable form login
	            .httpBasic(httpBasic -> httpBasic.disable()); // Disable HTTP Basic authentication
	    return http.build();
	}


//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//        http.csrf(csrf -> csrf.disable())
//                .authorizeHttpRequests(auth -> auth
//                        .mvcMatchers("/Manager").hasRole("MANAGER")
//                        .mvcMatchers("/Employee").hasRole("EMPLOYEE")
//                        .mvcMatchers("/Customer").hasRole("CUSTOMER")
////                        .mvcMatchers("/users/signup", "/users/signin", "/cities", "/flights").permitAll()
//                        .mvcMatchers("/swagger-ui/**","/v*/api-doc*/**").permitAll()
//
//                        .mvcMatchers("/public", "/signup", "/signin").permitAll()
//                        .anyRequest().authenticated())
//                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
////        http.formLogin(Customizer.withDefaults());
//        return http.build();
//    	
//      http.csrf(csrf -> csrf.disable())
//      	.authorizeHttpRequests(auth -> auth
//	            .mvcMatchers("/Manager/**").hasRole("MANAGER")
//	            .mvcMatchers("/Employee/**").hasRole("EMPLOYEE")
//	            .mvcMatchers("/Customer/**").hasRole("CUSTOMER")
//	            .mvcMatchers("/public", "/signup", "/signin").permitAll()
//	            .mvcMatchers("/swagger-ui/**", "/v*/api-doc*/**").permitAll()
//	            .anyRequest().authenticated()
//	        .and()
//	        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class));
//    	return http.build();
//    }
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        return new CustomUserDetailsService();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return NoOpPasswordEncoder.getInstance();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager() {
//        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
//        daoAuthenticationProvider.setUserDetailsService(userDetailsService());
//        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
//        return new ProviderManager(daoAuthenticationProvider);
//    }
    
}

//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        UserDetails user = User.withDefaultPasswordEncoder()
//            .username("user")
//            .password("password")
//            .roles("USER")
//            .build();
//
//        return new InMemoryUserDetailsManager(user);
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http .authorizeRequests()
//                .antMatchers("/**").permitAll() // Allow all requests, adjust this if needed
//                .and()
//            .csrf().disable(); // Disable CSRF protection for simplicity
//    }
//}