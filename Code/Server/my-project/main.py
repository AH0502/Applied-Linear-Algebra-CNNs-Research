from manim import *
class ConvolutionScene2D(Scene):
    def construct(self):
       sq = Square(2)
       name = MathTex(r"\overline{AB}")

       self.add(sq, name)