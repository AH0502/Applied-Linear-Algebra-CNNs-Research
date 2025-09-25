import numpy as np
from typing import Callable, List

def square(x: np.ndarray) -> np.ndarray:
    return np.power(x, 2)

def derivative(
        f: Callable[[np.ndarray], np.ndarray],
        input: np.ndarray,
        delta: float = 0.00001
) -> np.ndarray:
    return (f(input + delta) - f(input)) / delta

def composite_func(
        chain: List[Callable[[np.ndarray], np.ndarray]],
        input: np.ndarray
        ) -> np.ndarray:
    for func in chain:
        input = func(input)

    return input

def chain_rule(
        chain: List[Callable[[np.ndarray], np.ndarray]],
        input: np.ndarray
) -> np.ndarray:
    derivs = []
    for func in chain: 
        deriv = derivative(func, input)
        derivs.append(deriv)

    for deriv in derivs:
        deriv *= deriv
        
    return deriv

input = np.array([1])

funcs = [square, lambda x : 2*x + 1, lambda x : 1/x]

print(chain_rule(funcs, input))


