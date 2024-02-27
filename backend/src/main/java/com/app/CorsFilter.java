package com.app;


import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;


@Component
public class CorsFilter extends OncePerRequestFilter {

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      response.setHeader("Access-Control-Max-Age", "3600");
      response.setHeader("Access-Control-Allow-Headers", "Authorization, content-type, xsrf-token");
      response.addHeader("Access-Control-Expose-Headers", "xsrf-token");
      if ("OPTIONS".equals(request.getMethod())) {
          response.setStatus(HttpServletResponse.SC_OK);
      } else { 
          filterChain.doFilter(request, response);
      }
  }
}


//import java.io.IOException;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//@Component
//public class CorsFilter extends OncePerRequestFilter {
//
//    private final String[] excludedPaths = {"/signin", "/signup", "/reset"};
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        if (isExcludedPath(request.getRequestURI())) {
//            filterChain.doFilter(request, response); // Skip CORS configuration for excluded paths
//        } else {
//            configureCorsResponse(response); // Configure CORS response headers
//            if ("OPTIONS".equals(request.getMethod())) {
//                response.setStatus(HttpServletResponse.SC_OK);
//            } else {
//                filterChain.doFilter(request, response);
//            }
//        }
//    }
//
//    private boolean isExcludedPath(String requestUri) {
//        for (String path : excludedPaths) {
//            if (requestUri.startsWith(path)) {
//                return true;
//            }
//        }
//        return false;
//    }
//
//    private void configureCorsResponse(HttpServletResponse response) {
//        response.setHeader("Access-Control-Allow-Origin", "*");
//        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//        response.setHeader("Access-Control-Max-Age", "3600");
//        response.setHeader("Access-Control-Allow-Headers", "Authorization, content-type, xsrf-token");
//        response.addHeader("Access-Control-Expose-Headers", "xsrf-token");
//    }
//}



