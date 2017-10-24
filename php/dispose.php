<?php
	header('Access-Control-Allow-Origin: *');


	if (!isset($_POST['cmd'])) {
		die(json_encode(['error' => 'cmd not defined']));
	}

	$return = [];

	$cmd = $_POST['cmd'];
	$postData = $_POST['data'];


	if ($cmd == 'zeit') {
		$return['zeit'] = date("d.m.Y H:i:s");
	} elseif ($cmd == 'get navi items') {
		include('navi_get_items.php');
	} else {
		$return['error'] = 'unknown cmd';
	}
			
	echo json_encode($return);
?>