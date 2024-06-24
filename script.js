document.addEventListener('DOMContentLoaded', (event) => {
    const circles = document.querySelectorAll('.circle__blog');
    let shakeInterval;
    const maxRadius = 20; // Maximum radius
    const minRadius = 5; // Minimum radius

    function getRandomSpeed() {
        return Math.random() * 0.05 + 0.01; // Random speed between 0.01 and 0.06
    }

    function getRandomDirection() {
        return Math.random() < 0.5 ? 1 : -1; // Random direction: 1 for clockwise, -1 for counterclockwise
    }

    circles.forEach(circle => {
        circle.radius = Math.random() * (maxRadius - minRadius) + minRadius;
        circle.speed = getRandomSpeed();
        circle.direction = getRandomDirection(); // 1 for clockwise, -1 for counterclockwise
        circle.angle = Math.random() * Math.PI * 2; // Random starting angle

        circle.getCircularTransform = function() {
            const translateX = this.radius * Math.cos(this.direction * this.angle);
            const translateY = this.radius * Math.sin(this.direction * this.angle);
            return `translate(${translateX}px, ${translateY}px)`;
        };

        circle.startShaking = function() {
            if (!shakeInterval) {
                shakeInterval = setInterval(() => {
                    circles.forEach(circle => {
                        circle.angle += circle.speed;
                        circle.style.transform = circle.getCircularTransform();
                    });
                }, 50);
            }
        };

        circle.stopShaking = function() {
            clearInterval(shakeInterval);
            shakeInterval = null;
        };

        circle.addEventListener('mouseenter', circle.startShaking);
        circle.addEventListener('mouseleave', circle.stopShaking);
    });
});
