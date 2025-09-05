import numpy as np
from typing import Callable

def square(x: np.ndarray) -> np.ndarray:
    return np.power(x, 2)

def derivative(
        f: Callable[[np.ndarray], np.ndarray],
        input: np.ndarray,
        delta: float = 0.00001
) -> np.ndarray:
    return (f(input + delta) - f(input)) / delta

