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

            if($user->url == "http://localhost:3000/company") {

                $query = $conn->prepare("SELECT name FROM company WHERE name = '$user->name'");
                
                $query->execute();

                $result = $query->rowCount();

                if($result >= 1) {
                    echo false;
                }else {

                    $sql = "INSERT INTO name(id, name, wages, image, job, workSchedule, location, description, created_at) 
                    VALUES(null, :name, :wages, :image, :job, :workSchedule, :location, :description :created_at)";
                    $stmt = $conn->prepare($sql);
                    
                    $created_at = date('Y-m-d');
                    $stmt->bindParam(':name', $user->name);
                    $stmt->bindParam(':wages', $user->wages);
                    $stmt->bindParam(':image', $user->image);
                    $stmt->bindParam(':job', $user->job);
                    $stmt->bindParam(':workSchedule', $user->workSchedule);
                    $stmt->bindParam(':location', $user->location);
                    $stmt->bindParam(':description', $user->description);
                    $stmt->bindParam(':created_at', $created_at);

                    if($stmt->execute()) {
                        $response = ['status' => 1, 'message' => 'Record created successfully.'];
                    } else {
                        $response = ['status' => 0, 'message' => 'Failed to create record.'];
                    }
                    echo json_encode($response);
                }
            } else if($user->url == "http://localhost:3000/home") {
                $sql = "SELECT * FROM company";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($users);
            } else if($user->url == "http://localhost:3000/delete") {
                $user = json_decode( file_get_contents('php://input') );
                $sql = "DELETE FROM product WHERE id = :id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $user->idProduct);
                if($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                }
                echo json_encode($response);    
            }else if($user->url == "http://localhost:3000/detail" || $user->url == "Payment/getProduct") {
                $sql = "SELECT * FROM product WHERE id = :id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $user->id);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($users);
            }else if($user->url == "http://localhost:3000/product/handleSubmit/edit") {
                $sql = "UPDATE product SET nameProduct= :nameProduct, price =:price, amount =:amount, specification =:specification, type =:type, image =:image WHERE id = :id";
                $stmt = $conn->prepare($sql);
                // $updated_at = date('Y-m-d');
                $stmt->bindParam(':id', $user->id);
                $stmt->bindParam(':nameProduct', $user->nameProduct);
                $stmt->bindParam(':price', $user->price);
                $stmt->bindParam(':amount', $user->amount);
                $stmt->bindParam(':specification', $user->specification);
                $stmt->bindParam(':type', $user->type);
                $stmt->bindParam(':image', $user->image);

                if($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record updated successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to update record.'];
                }
                echo json_encode($response);
            
            }else {
                print_r($user);
                $query = $conn->prepare("SELECT * FROM product
                WHERE nameProduct LIKE '%$user->nameProduct%'");
                
                $query->execute();
                $users = $query->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($users);
            }
            break;
    }
?>
