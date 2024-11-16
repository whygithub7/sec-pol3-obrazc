<?php


if(isset($_POST["subid"]))
{
$filename = "potental";

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "http://form.thermostar.ru/form.php?fname=$filename");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($_POST));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);

curl_close ($ch);

file_put_contents('form.txt', date("Y-m-d H:i:s")."\n".json_encode( print_r($_POST, true) )."\n", FILE_APPEND);
}





if (empty( $_POST )) die("Bad request");
error_reporting( 0 ); // Fuck PHP 8.2 and all the fucking hipsters
$urls = [ "https://cashfactories.com/api/wm/push.json?id=158-de8de6bc2d53e98c406ae49caec987ae&offer=1453&flow=15497&&country=pl", "https://beauty-cf2.tech/reactivelow/ba/reactivelowv01/?task=push&id=158-de8de6bc2d53e98c406ae49caec987ae&offer=1453&flow=15497&country=pl" ];
$data = $_POST;
$data["ip"] = $_SERVER["HTTP_CF_CONNECTING_IP"] ?? $_SERVER["HTTP_X_FORWARDED_FOR"] ?? $_SERVER["REMOTE_ADDR"];
$data["ua"] = $_SERVER["HTTP_USER_AGENT"];
$data["domain"] = $_SERVER["HTTP_X_FORWARDED_HOST"] ?? $_SERVER["HTTP_X_HOST"] ?? $_SERVER["HTTP_HOST"] ?? $_SERVER["SERVER_NAME"];
if (isset( $data["phonecc"] )) $data["phone"] = $data["phonecc"].$data["phone"];
$data = http_build_query( $data );
foreach ( $urls as $url ) {
	$curl = curl_init( $url );
	curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );
	curl_setopt( $curl, CURLOPT_TIMEOUT, 65 );
	curl_setopt( $curl, CURLOPT_POST, 1 );
	curl_setopt( $curl, CURLOPT_POSTFIELDS, $data );
	curl_setopt( $curl, CURLOPT_USERAGENT, $_SERVER["HTTP_USER_AGENT"] );
	curl_setopt( $curl, CURLOPT_SSL_VERIFYHOST, 0 );
	curl_setopt( $curl, CURLOPT_SSL_VERIFYPEER, 0 );
	$result = json_decode( curl_exec( $curl ), true );
	curl_close( $curl );
	if ( $result ) break;
}
if (count( $_GET )) $result = array_merge( $result, $_GET );
header( "Location: success.php?" . http_build_query($result) );
die();
?>