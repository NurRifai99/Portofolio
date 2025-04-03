import BlurText from "../assets/animated/Blurtext";

const Notab = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div className="w-full h-screen  flex flex-col items-center gap-8 justify-center">
            <BlurText
                text="Welcome To My PORTFOLIO WEB"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl font-bold "
            />

           <div className="w-1/4 h-2 rounded-md bg-cyan-400 m-5" style={{
            width: '70%',
            animation: 'besar 1.5s ease-in-out ',}}></div>

            <style>
                {`
                    @keyframes besar {
                        0% { width: 25%; }
                        100% { width: 70%; }
                    }
                `}
            </style>
        </div>
        
        
    );
};

export default Notab;
