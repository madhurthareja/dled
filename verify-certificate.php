<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get the posted data
$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['certificate_id']) || empty(trim($input['certificate_id']))) {
    http_response_code(400);
    echo json_encode(['error' => 'Certificate ID is required']);
    exit;
}

$certificate_id = trim($input['certificate_id']);

// Here you would integrate with your existing PHP plugin
// For example, if you have a WordPress plugin:
// 
// include_once($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
// include_once($_SERVER['DOCUMENT_ROOT'] . '/wp-includes/wp-db.php');
// 
// Or if you have a custom plugin function:
// $result = your_certificate_verification_function($certificate_id);

// Example response - replace this with your actual plugin integration
try {
    // Sample verification logic - replace with your plugin's verification method
    $certificate_data = verify_certificate_with_plugin($certificate_id);
    
    if ($certificate_data) {
        echo json_encode([
            'success' => true,
            'message' => 'Certificate verified successfully',
            'participant_name' => $certificate_data['name'],
            'program_name' => $certificate_data['program'],
            'issue_date' => $certificate_data['date'],
            'certificate_id' => $certificate_id
        ]);
    } else {
        http_response_code(404);
        echo json_encode([
            'success' => false,
            'message' => 'Certificate not found or invalid'
        ]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Server error: ' . $e->getMessage()
    ]);
}

// Function to integrate with your existing plugin
function verify_certificate_with_plugin($certificate_id) {
    // Replace this with your actual plugin integration
    // Examples:
    
    // If using WordPress/database:
    // global $wpdb;
    // $result = $wpdb->get_row($wpdb->prepare(
    //     "SELECT * FROM {$wpdb->prefix}certificates WHERE certificate_id = %s", 
    //     $certificate_id
    // ));
    
    // If calling a plugin function:
    // return call_user_func('your_plugin_verify_function', $certificate_id);
    
    // Sample data - remove this and use your actual plugin
    $sample_certificates = [
        'FDP2025-001' => [
            'name' => 'Dr. Sudarshan Iyengar',
            'program' => 'Faculty Development Program on AI',
            'date' => '2025-08-22'
        ],
        'FDP2025-002' => [
            'name' => 'Ms. Pavani',
            'program' => 'Faculty Development Program on AI',
            'date' => '2025-08-22'
        ]
    ];
    
    return isset($sample_certificates[$certificate_id]) ? $sample_certificates[$certificate_id] : false;
}
?>