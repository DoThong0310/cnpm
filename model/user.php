<?php
    function checkuser($user, $pass){
        $sql = "select * from users where users = '".$user."' and password = '".$pass."'";
        $conn = connect();
        $stmt = $conn -> prepare($sql);
        $stmt -> execute();
        $stmt -> setFetchMode(PDO::FETCH_ASSOC);
        return $stmt -> fetch();
    }
?>