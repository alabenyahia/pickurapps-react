const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {delay: 0.35, duration: 0.35}
    },
    exit: {
        y: '-100vh',
        transition: {ease: 'easeInOut'}
    }
};

export {containerVariants};