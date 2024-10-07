<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the POST variables are set
    $name = isset($_POST["name"]) ? filter_var(trim($_POST["name"]), FILTER_SANITIZE_FULL_SPECIAL_CHARS) : '';
    $email = isset($_POST["email"]) ? filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL) : '';
    $message = isset($_POST["message"]) ? filter_var(trim($_POST["message"]), FILTER_SANITIZE_FULL_SPECIAL_CHARS) : '';

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die(json_encode(["status" => "error", "message" => "Invalid email format"]));
    }

    // Email to send to
    $to = "mittaldiya371@gmail.com"; // Replace with your email address
    $subject = "New Contact Us Message from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
    } else {
        // Log error message
        error_log("Email failed to send from: $email", 0);
        echo json_encode(["status" => "error", "message" => "Failed to send message. Please try again later."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
