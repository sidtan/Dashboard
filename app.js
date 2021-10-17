<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <div class="header black-bg">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 pt-2 pb-2 text-white">My Dashboard</div>
            </div>
        </div>
    </div>

    <div class="body main-bg pt-2 pb-2 pl-2 pr-2">
        <div class="container-fluid" style="height: 100%">
            <div class="row">
                <div class="col-md-6 chart-container" style="height: 100%">
                    <div style="height: 100%;margin-right:1.6%" class="block-bg" id="pie"></div>
                </div>
                <div class="col-md-6 chart-container" style="height: 100%">
                    <div style="height: 100%" class="block-bg" id="line"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 chart-container">
                    <div style="height: 100%" class="block-bg" id="bar"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.4.0/d3.js"></script>
    <script src="app.js"></script>
</body>
</html>
