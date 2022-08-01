const Vintersection = {
    mounted(el, binding) {
        function createObserver(el) {
            let observer;

            let options = {
                root: null,
                rootMargin: "0px"
            };

            function handleIntersect(entries) {
                if (entries[0].isIntersecting) {
                    binding.value();
                }
            };

            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(el);
        }

        createObserver(el);
    }
}

export default Vintersection;