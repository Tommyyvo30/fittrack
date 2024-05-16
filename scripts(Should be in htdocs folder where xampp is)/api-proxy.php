<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$apiUrl = 'https://api-ninjas.com/api/exercises';
$apiKey = 'HDSdmguEdXTHZd++VYZDiw==f5p31ItZo9SPfG4P'; // Replace with  API key 

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-Api-Key: ' . $apiKey));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FAILONERROR, true); // Optional: cURL will return false on HTTP errors

$response = curl_exec($ch);

if ($response === false) {
    $error = curl_error($ch);
    curl_close($ch);

    // Handle error;
    echo json_encode(array("error" => $error));
    exit;
}

curl_close($ch);
echo $response;
?>
