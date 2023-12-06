import React, { useEffect } from 'react';

const CartBtnComponent = () => {
    useEffect(() => {
        var modal = document.getElementById("cartModal");
        var btn = document.getElementById("cartBtn");
        var span = document.getElementsByClassName("close")[0];

        

        const openModal = () => {
            modal.style.display = "block";
        };

        const closeModal = () => {
            modal.style.display = "none";
        };

        btn.addEventListener("click", openModal);
        span.addEventListener("click", closeModal);
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        return () => {
            btn.removeEventListener("click", openModal);
            span.removeEventListener("click", closeModal);
            window.removeEventListener("click", closeModal);
        };
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default CartBtnComponent;
