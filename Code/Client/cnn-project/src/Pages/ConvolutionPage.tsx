import { MathJax } from "better-react-mathjax";
import CustomPage from "../components/CustomPage";
import { Typography } from "@mui/material";
import Definition from "../components/Definition";
import Theorem from "../components/Theorem";
import Proof from "../components/Proof";

export default function ConvolutionPage() {

    return (
        <CustomPage title="Convolution">
              <Typography>
                    So what <em>is</em> is a convolution exactly?
                </Typography>
                <Definition number="1" title="Convolution">
                    A <em>convolution</em> is a binary operation that is
                    defined as
                    <MathJax>
                        {"$$ s(t) = (x \\ast w)(t) \\quad w, x: \\mathbb{R} \\rightarrow \\mathbb{R}; \\quad t \\in \\mathbb{R}$$"}
                    </MathJax>
                    and 
                    <MathJax>
                        {"$$ s(t) = \\int_{-\\infty}^{\\infty} x(a) w(t-a) da \\quad a, t \\in \\mathbb{R} $$"}
                    </MathJax>
                </Definition>
                <MathJax>
                    {`Generally, the above function is defined for any two functions, 
                    \\(w(t-a)\\) and \\(x(a)\\) where the integral is defined.
                    The convolution has useful algebraic properties such 
                    as associativity, commutativity, and distributivity.`}
                </MathJax>
                <Theorem number="1.1" title="Commutativity">
                    <MathJax>
                        {`$$ c(x*w)=(cx)*w=x*(cw) $$`}
                    </MathJax>
                </Theorem>
                <Proof>
                    <MathJax>
                        {`By definition,
                        $$ (x * w)(t) = \\int_{-\\infty}^{\\infty} x(a)w(t-a)da.  $$
                        Let \\(v = t - a \\rightarrow a = t - v\\) and \\(dv = -da\\).
                        Substituting back into the definition:
                        $$= \\int_{\\infty}^{-\\infty}-x(t-v)w(a)da $$
                        $$=\\int_{-\\infty}^{\\infty}w(a)x(t-v)da = (w*x)(t) \\quad \\blacksquare $$`}
                    </MathJax>
                </Proof>
                <Theorem number="1.2" title="Distributivity">
                    <MathJax>
                        {`$$ (x + y)*w = x*w + y*w $$`}
                    </MathJax>
                </Theorem>
                    <Proof>
                        <MathJax>
                            {`
                            $$ x*w + y*w = \\int_{-\\infty}^{\\infty} x(a)w(t-a)da 
                            + \\int_{-\\infty}^{\\infty} y(a)w(t-a)da $$
                            Recall from calculus that the sum property of integrals states:
                            $$ \\int_a^b[f(x)+g(x)]dx = \\int^b_af(x)dx + \\int_a^bg(x)dx $$
                            Therefore,
                            $$ \\int_{-\\infty}^{\\infty}(x(a)w(t-a)+y(a)w(t-a))da $$
                            $$ = \\int_{-\\infty}^{\\infty} (x(a)+y(a))w(t-a)da $$
                            $$ = (x+y) * w \\quad \\blacksquare$$
                            `}
                        </MathJax>
                    </Proof>

                    <Typography variant="h6">
                        Discrete Convolution
                    </Typography>
                    Since computers operate on discrete 
                    rather than continuous data, it is necessary to modify our 
                    definition of convolution to account for this. 
                    <Definition number="2" title="Discrete Convolution">
                        <MathJax>
                            {`For two functions \\(x, w: \\mathbb{Z} \\rightarrow 
                            \\mathbb{Z}\\), we define the discrete convolution as
                            $$
                            \\sum_{\\alpha = -\\infty}^{\\infty} x(a)w(t-a), \\quad 
                            \\alpha, t \\in \\mathbb{Z}.
                            $$`}
                        </MathJax>
                    </Definition>
                    <MathJax>
                        {`In applications, deep learning practitioners often refer to
                        the function \\(w\\) as the `}<em>kernel</em>.
                    </MathJax>
        </CustomPage>
    )
}