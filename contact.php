<?php

include("config.php");

if(isset($_POST['send']))
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO messages(name,email,message)
            VALUES('$name','$email','$message')";

    if(mysqli_query($conn,$sql))
    {
        echo "<script>alert('Message Sent Successfully');window.location='index.html';</script>";
    }
    else
    {
        echo "Error";
    }
}

?>