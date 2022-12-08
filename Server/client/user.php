<?php 
    include '../setApi.php';
    
    include '../DbConnect.php';

    $objDb = new DbConnect;
    $conn = $objDb->connect();
    
    $method = $_SERVER['REQUEST_METHOD'];

    switch($method) {
        case "POST":
            
            $user = json_decode(file_get_contents('php://input'));
            $path = explode('/', $_SERVER['REQUEST_URI']);
            
            // print_r
            if($user->url == "http://localhost:3000/register") {
                if(!filter_var($user->email, FILTER_VALIDATE_EMAIL)) {
                    $error = "Invalid email format";
                    echo $error;
                    break;
                }
                
                $query = $conn->prepare("SELECT email FROM user WHERE email = '$user->email'");
                
                $query->execute();

                $result = $query->rowCount();

                if($result >= 1) {
                    echo false;
                }else {
                    $option = [
                        "cost" => 12
                    ];
                    $user->password = password_hash($user->password, PASSWORD_BCRYPT, $option);
                    $sql = "INSERT INTO user(id, username, email, password, phoneNumber, created_at) VALUES(null, :username, :email, :password, :phoneNumber, :created_at)";
                    $stmt = $conn->prepare($sql);
                    $created_at = date('Y-m-d');
                    $stmt->bindParam(':username', $user->username);
                    $stmt->bindParam(':email', $user->email);
                    $stmt->bindParam(':password', $user->password);
                    $stmt->bindParam(':phoneNumber', $user->phoneNumber);
                    $stmt->bindParam(':created_at', $created_at);
                    if($stmt->execute()) {
                        $sql = "SELECT * FROM user";
                        $sql .= " WHERE email = :email";
                        $stmt = $conn->prepare($sql);
                        $stmt->bindParam(':email', $user->email);
                        $stmt->execute();
                        $response = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    } else {
                        $response = ['status' => 0, 'message' => 'Failed to create record.'];
                    }
                    echo json_encode($response);
                }
            }else if($user->url == "http://localhost:3000/navbar/delete") {
                $sql = "DELETE FROM user WHERE id = :id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $user->id);
                if($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                }
                echo json_encode($response);
            }else if($user->url == "Register/handleClick") {
                print_r($user);
                $sql = "UPDATE user SET username= :username, job= :job, phoneNumber= :phoneNumber, city= :city, skill= :skill, image= :image WHERE email = :email";
                $stmt = $conn->prepare($sql);
                
                $stmt->bindParam(':email', $user->email);
                $stmt->bindParam(':username', $user->username);
                $stmt->bindParam(':job', $user->job);
                $stmt->bindParam(':phoneNumber', $user->phoneNumber);
                $stmt->bindParam(':city', $user->city);
                $stmt->bindParam(':skill', $user->skill);
                $stmt->bindParam(':image', $user->image);

                if($stmt->execute()) {
                    $sql = "SELECT * FROM user";
                    $sql .= " WHERE email = :email";
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':email', $user->email);
                    $stmt->execute();
                    $response = $stmt->fetchAll(PDO::FETCH_ASSOC);
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to update record.'];
                }
                
                echo json_encode($response);
            }else if($user->url == "Register/useEffect") {
                $sql = "SELECT * FROM user";
                $sql .= " WHERE email = :email";

                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':email', $user->email);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($users);
            }else {
                if(isset($user->email)) {
                    if($user->email == "robertwijaya1033@gmail.com" || $user->email == "robertwijaya.w@gmail.com") {
                        $sql = "SELECT password FROM admin";
                        $sql .= " WHERE email = :email";
                        $stmt = $conn->prepare($sql);
                        $stmt->bindParam(':email', $user->email);
                        $stmt->execute();
                        $users = $stmt->fetch();
                        $verify = password_verify($user->password, $users["password"]);
                        if($verify) {
                            $sql = "SELECT * FROM admin";
                            $sql .= " WHERE email = :email";
                            $stmt = $conn->prepare($sql);
                            $stmt->bindParam(':email', $user->email);
                            $stmt->execute();
                            $users = $stmt->fetch(PDO::FETCH_ASSOC);
                        }else {
                            $users = ['status' => 0, 'message' => 'Failed to create record.'];
                        }
                        echo json_encode($users);
                    }
                    else {
                        $sql = "SELECT password FROM user";
                        $sql .= " WHERE email = :email";
                        $stmt = $conn->prepare($sql);
                        $stmt->bindParam(':email', $user->email);
                        $stmt->execute();
                        $users = $stmt->fetch();

                        $verify = password_verify($user->password, $users["password"]);
                        if($verify) {
                            $sql = "SELECT * FROM user";
                            $sql .= " WHERE email = :email";
                            $stmt = $conn->prepare($sql);
                            $stmt->bindParam(':email', $user->email);
                            $stmt->execute();
                            $users = $stmt->fetch(PDO::FETCH_ASSOC);
                        }else {
                            $users = ['status' => 0, 'message' => 'Failed to create record.'];
                        }
                        echo json_encode($users);
                    }
                }
                else {
                    $sql = "SELECT * FROM user";
                    $stmt = $conn->prepare($sql);
                    $stmt->execute();
                    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($users);
                }
            }   
            
            break;
    }
?>
