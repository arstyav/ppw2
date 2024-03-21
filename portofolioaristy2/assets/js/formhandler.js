document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formUrl = form.getAttribute("action");
        const formMethod = form.getAttribute("method");

        try {
            const response = await fetch(formUrl, {
                method: formMethod,
                body: formData,
            });

            if (response.ok) {
                alert("Formulir berhasil dikirim!");
                form.reset(); // Reset formulir setelah berhasil dikirim
            } else {
                throw new Error("Gagal mengirim formulir. Silakan coba lagi.");
            }
        } catch (error) {
            alert(error.message);
        }
    });
});
