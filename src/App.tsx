import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./App.css";

function App() {
  const [showWithout, setShowWithout] = useState(false);
  const [showWith, setShowWith] = useState(false);

  return (
    <main className="page">
      <h1>Utan Motion vs. med Motion</h1>

      <div className="comparison">
        {/* UTAN MOTION */}
        <section className="column">
          <h2>Utan Motion</h2>

          <button
            className="css-button"
            onClick={() => setShowWithout(!showWithout)}
          >
            {showWithout ? "Dölj kort" : "Visa kort"}
          </button>

          <div className={`css-card ${showWithout ? "visible" : ""}`}>
            <h3>Hej! 👋</h3>
            <p>Det här kortet animeras med CSS.</p>
          </div>
        </section>

        {/* MED MOTION */}
        <section className="column motion-column">
          <h2>Med Motion</h2>

          <motion.button
            className="motion-button"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#f97316",
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setShowWith(!showWith)}
          >
            {showWith ? "Dölj kort" : "Visa kort"}
          </motion.button>

          <AnimatePresence>
            {showWith && (
              <motion.div
                className="motion-card"
                drag
                dragConstraints={{
                  top: -50,
                  right: 50,
                  bottom: 50,
                  left: -50,
                }}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <h3>Hej! 👋</h3>
                <p>Det här kortet animeras med Motion.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}

export default App;
