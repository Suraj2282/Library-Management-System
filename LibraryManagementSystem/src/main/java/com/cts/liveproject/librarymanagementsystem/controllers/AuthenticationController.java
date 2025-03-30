package com.cts.liveproject.librarymanagementsystem.controllers;



import java.io.IOException;
import java.util.Optional;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.liveproject.librarymanagementsystem.dto.AuthenticationRequest;
import com.cts.liveproject.librarymanagementsystem.entities.User;
import com.cts.liveproject.librarymanagementsystem.repositories.UserRepository;
import com.cts.liveproject.librarymanagementsystem.utils.JwtUtils;

import jakarta.servlet.http.HttpServletResponse;

@RestController
public class AuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private UserRepository userRepository;
	
	public static final String TOKEN_PREFIX="Bearer ";
	public static final String HEADER_STRING = "Authorization";
	
	
	
	@PostMapping("/authenticate")
	public void createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest, HttpServletResponse res) throws IOException,JSONException
	{
		try
		{
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUserEmail(), authenticationRequest.getUserPassword()));
			
		}catch(BadCredentialsException e)
		{
			throw new BadCredentialsException("Incorrect Username or Password");
		}
		catch(DisabledException e)
		{
			res.sendError(HttpServletResponse.SC_NOT_FOUND, "User Not Created");
			return;
		}
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUserEmail());
		
		Optional<User> optionalUser = userRepository.findFirstByUserEmail(userDetails.getUsername());
		
		final String jwt = jwtUtils.generateToken(userDetails.getUsername());
		
		if(optionalUser.isPresent())
		{
			res.getWriter().write(new JSONObject().put("userId", optionalUser.get().getUserId())
					.put("role", optionalUser.get().getUserRole())
					.toString());
		}
		res.setHeader("Access-Control-Expose-Headers", "Authorization");
		res.setHeader("Access-Control-Allow-Headers", "Authorization, X-Pingother, Origin, X-Requestes-With, Content-Type, Accept, X-Custom-header");
		res.setHeader(HEADER_STRING, TOKEN_PREFIX+jwt);
		
//		return new AuthenticationResponse(jwt);
	}
	

}
