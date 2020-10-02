<?php
    session_start();
    include '../model/connect.php';
    include '../view/header.php';
    include '../model/user.php';
    if(isset($_GET['act'])){
        $act = $_GET['act'];
        switch($act){
            case 'product':
                include '../view/product.php';
                break;

            case 'login':
                if(isset($_POST['login'])){
                    $user = $_POST['username'];
                    $pass = $_POST['password'];
                    $checkusers = checkuser($user, $pass);
                    
                    if($checkusers['id']>0){
                        $_SESSION['id']=$checkusers['id'];
                        $_SESSION['users']=$checkusers['users'];
                        header("location: controllerindex.php");
                    }
                    else{
                        $error = 'tài khoản không tồn tại';
                    }
                }
                include '../view/login.php';
                break;

            case 'cart':
                include '../view/cart.php';
                break;

            default:
                include '../view/home.php';
                break;
        }
    }
    else{
        include '../view/home.php';
    }

    include '../view/footer.php';
?>