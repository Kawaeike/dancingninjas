<?php
	// default
	$return['naviItems'] = [
		'home' => [ 'key' => 'home', 'btnName' => 'Home' ],
		'account' => ['key' => 'account', 'btnName' => 'Account' ]
	];

	$user = $postData['user'];

	if (!$user) {
		$return['naviItems'] = [
			'home' => [ 'key' => 'home', 'btnName' => 'Home' ],
			'account' => ['key' => 'account', 'btnName' => 'Account' ]
		];
	} else {
		// checken, welche navi-rechte der user hat und navi-items hinzufügen
		if ($user['uid'] === '6611') {
			$return['naviItems']['admin'] = [ 'key' => 'admin', 'btnName' => 'Admin' ];
		}
	}

	$return['currentItemKey'] = 'home';

?>