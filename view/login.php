<main id="main-login">
    <div class="container">
        <div class="row padding-30">
            <div class="col col-3-6 col-m-6-6 col-t-6-6 boder-1">
                <form action="controllerindex.php?act=login" method="POST" id="login">
                    <p class="title-form">đăng nhập</p>
                    <div class="group-input">
                        <label for="username">Tên tài khoản</label>
                        <input type="text" name="username" >
                        
                    </div>
                    <div class="group-input">
                        <label for="password">Mật khẩu</label>
                        <input type="password" name="password">
                        
                    </div>
                    <div class="group-input">
                        <button type="submit" name="login">đăng nhập</button>
                    </div>
                </form>
                
            </div>
            <div class="wall-login"></div>
            <div class="col col-3-6 col-m-6-6 col-t-6-6">
                <form action="../controller/controllerlogin.php" method="POST" id="register">
                    <p class="title-form">đăng kí</p>
                    <div class="group-input">
                        <label for="username">Tên tài khoản</label>
                        <input type="text" name="username" class="username">
                    </div>
                    <div class="group-input">
                        <label for="password">Mật khẩu</label>
                        <input type="password" name="password">
                    </div>
                    <div class="group-input">
                        <button type="submit" name="register">đăng kí</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>