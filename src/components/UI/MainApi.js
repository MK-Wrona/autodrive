<template>
    
</template>
<script>


export default makeOrder = (name,phone,email,city_id) => {
    const res = await fetch ('http://localhost:3000/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            name: this.form.name,
            phone: this.form.phone,
            email: this.form.email,
            city_id: this.form.city_id
        })

    })
    console.log(res)
}
</script>
