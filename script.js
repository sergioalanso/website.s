function spinImageOnScroll() {
    var img = document.getElementById('spinningImage');

    var rotationAngle = 0;

    var rotationSpeed = 6;

    function handleWheel(event) {
        rotationAngle += event.deltaY > 0 ? rotationSpeed : -rotationSpeed;

        img.style.transform = 'rotate(' + rotationAngle + 'deg)';

        event.preventDefault();
    }

    document.addEventListener('wheel', handleWheel);
}

spinImageOnScroll();