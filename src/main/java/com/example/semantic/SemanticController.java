package com.example.semantic;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/semantic")
@CrossOrigin(origins = "http://localhost:4200")

class SemanticController {

    @PostMapping("/processInput")
    public String processInput(@RequestBody String input) {
        try {
            String spotlightResponse = SpotlightEntityRecognition.recognizeEntities(input);
            return spotlightResponse;
        }
         catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}