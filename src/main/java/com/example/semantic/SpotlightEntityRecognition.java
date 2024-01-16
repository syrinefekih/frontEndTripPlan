package com.example.semantic;

import java.net.*;
import java.io.*;

public class SpotlightEntityRecognition {
    public static String recognizeEntities(String inputText) throws IOException {
        URL url = new URL("https://api.dbpedia-spotlight.org/en/annotate" + "?text=" + URLEncoder.encode(inputText, "UTF-8"));
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        connection.setRequestProperty("Accept", "application/json");

        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String inputLine;
        StringBuilder content = new StringBuilder();
        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }
        in.close();

        return content.toString();
    }
}

