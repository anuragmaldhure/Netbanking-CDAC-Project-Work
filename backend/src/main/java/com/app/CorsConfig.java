//package com.app;
//
//import java.io.IOException;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.stereotype.Component;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.filter.OncePerRequestFilter;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//
//@Configuration
//public class CorsConfig {
//    @Bean
//    public CorsFilter corsFilter() {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//
//        config.addAllowedOrigin("http://localhost:3000"); 
////        config.addAllowedOrigin("*"); 
//        config.addAllowedHeader("*");
//        config.addAllowedMethod("*");
//        config.addAllowedMethod(HttpMethod.GET);
//        config.addAllowedMethod(HttpMethod.PUT);
//        config.addAllowedMethod(HttpMethod.POST);
//        config.addAllowedMethod(HttpMethod.DELETE);
//        config.addAllowedHeader("*");
//        
//        source.registerCorsConfiguration("/**", config);
//
//        return new CorsFilter(source);
//    }   
////  @Bean
////  public WebMvcConfigurer corsConfigurer() {
////      return new WebMvcConfigurer() {
////          @Override
////          public void addCorsMappings(CorsRegistry registry) {
////              registry.addMapping("/**")
////                      .allowedOrigins("http://localhost:3000")
////                      .allowedMethods("GET", "POST", "PUT", "DELETE")
////                      .allowedHeaders("*");
////          }
////      };
////  }
//    
//
//}
