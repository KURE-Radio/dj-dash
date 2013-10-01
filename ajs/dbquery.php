<?php
/**
 * Created by JetBrains PhpStorm.
 * User: tedger
 * Date: 9/28/13
 * Time: 6:18 PM
 * To change this template use File | Settings | File Templates.
 */

/**Array will eventually be queried from MSQL*/
$states = array("Iowa","Minnesota","Idaho","Illinois","Michigan");
$requesting = $_GET["entry"];
$return= array();
/** json_decode(file_get_contents("php://input"));*/
foreach ($states as $state)
{
    if(is_string( strstr(strtolower($state), strtolower($requesting)))){
       $return[] = $state;
    }
}

echo json_encode($return);

?>