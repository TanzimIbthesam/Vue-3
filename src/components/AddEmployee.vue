<template>
<div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
        <div class="col-3">
            <!-- Form -->
            <form class="form-example" action="" method="post">
                <h1>Add Employee</h1>
                
                <!-- Input fields -->
                <div class="form-group">
                    <label for="username">Name</label>
                    <input type="text" class="form-control username" id="username" placeholder="Username..." name="username">
                </div>
                <div class="form-group">
                    <label for="Address">Address</label>
                    <input type="text" class="form-control password" id="password" placeholder="Address." name="password">
                </div>
                <div class="mt-2 mb-2">
                   <button type="submit" class="btn btn-primary btn-customized">Submit</button>
                </div>
               
                <!-- End input fields -->
               
            </form>
            <!-- Form end -->
        </div>
    </div>
</div>
 
</template>

<script>

</script>

<style lang="scss" scoped>

</style>