package com.todoapp.TodoApplication.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
public class CorsConfig {

  @Bean
  public CorsFilter corsFilter() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();

    // Allow requests from the specified origin
    config.setAllowedOriginPatterns(Arrays.asList("*"));

    // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    config.addAllowedMethod("*");

    // Allow specific headers
    config.addAllowedHeader("*");

    // Allow credentials (cookies, authentication headers, etc.)
    config.setAllowCredentials(true);

    source.registerCorsConfiguration("/api/**", config);
    return new CorsFilter(source);
  }
}