function transaccion() {
    Swal.fire({
        title: "¿Está seguro de realizar la transacción?",
        type: 'warning',
        showCloseButton: true,
        confirmButtonText: 'Si, continuar'
    }).then(val => {
        if (val) {
            Swal.fire({
                title: "Gracias",
                text: "Transacción realizada",
                type: "success"
            });
        }
    });
}