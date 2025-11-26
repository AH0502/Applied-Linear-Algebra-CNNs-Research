import { MathJax } from "better-react-mathjax";
import CustomPage from "../components/CustomPage";
import Definition from "../components/Definition";
import { Typography } from "@mui/material";


export default function RingsandVectorSpacesPage() {
    return (
        <CustomPage title={"Rings and Vector Spaces"}>
            <Definition 
                number="1.1"
                title="Ring"
                >
                <MathJax>
                   {`
                   A nonempty set \\(\\mathcal{R}\\) is a ring
                   if it has two closed binary operations, addition and multiplication,
                   with the following properties:
                   `} 
                </MathJax>
                <ol>
                    <li>
                        <MathJax>Commutativity under addition: {`\\(\\quad a + b = b + a\\) `} for {` \\(a, b \\in \\mathcal{R}.\\)`}</MathJax>
                    </li>
                    <li>
                        <MathJax>Associativity under addition: 
                            {`\\(\\quad(a + b) + c = a + (b + c)\\) `}
                            for {` \\(a, b, c \\in \\mathcal{R}.\\)`}
                        </MathJax>
                    </li>
                    <li>
                        <MathJax>Identity element under addition: 
                            {`\\(\\quad \\exists e \\in \\mathcal{R}: a + e = a \\) `}
                            for {`\\( a \\in \\mathcal{R}.\\)`}
                        </MathJax>
                    </li>
                    <li>
                        <MathJax>
                            Inverse element under addition: 
                            {`\\(\\quad \\forall a \\in \\mathcal{R}, \\exists b \\in \\mathcal{R}: a + b = e.\\)`}
                        </MathJax>
                    </li>
                    <li>
                        <MathJax>
                            Associativity under multiplication: 
                            {`\\(\\quad(ab)c = a(bc)\\) `} for {` \\(a, b, c \\in \\mathcal{R}.\\)`}
                        </MathJax>
                    </li>
                    <li>
                        <MathJax>
                            Distributivity: 
                            {`
                            \\(\\quad a(b + c) = ab + ac\\quad\\) and \\(\\quad(a + b)c = ac + bc.\\)
                            `}
                        </MathJax>
                    </li>
                </ol>

                
                

            </Definition>

            <Typography>
                {`There are several different kinds of rings, which will
                be important to serve as a foundation for understanding `}
                <em>fields,</em>
                {` and ultimately, `}
                <em>vector spaces</em>. 
            </Typography>

            <Definition 
                number="1.2"
                title="Ring with Unity"
                >
                <MathJax>
                    If {`\\(\\mathcal{R}\\)`} is a ring and
                    {` \\(\\exists e \\in \\mathcal{R}: \\forall r \\in \\mathcal{R}: 
                    er = re = r\\)`}, then {`\\(\\mathcal{R}\\)`} is a <em>ring with unity.</em>
                </MathJax>
            </Definition>

            <Definition
                number="1.3"
                title="Commutative Ring"
                >
                <MathJax>
                    If {`\\(\\forall a, b \\in \\mathcal{R}: ab = ba \\) `}, then 
                    {` \\(\\mathcal{R}\\) `} is a <em>commutative ring</em>.
                </MathJax>
            </Definition>

            <Definition 
                number="1.4"
                title="Integral Domain"
            >
                <MathJax>
                    If {` \\(\\mathcal{R}\\) `} is a commutative ring with unity,
                    and {` \\(\\forall a, b \\in \\mathcal{R}: ab = 0, a = 0 \\lor b = 0 \\) `}
                    , {` \\(\\mathcal{R}\\) `} is an <em>integral domain.</em>
                </MathJax>
            </Definition>

            <Definition
                title="Division Ring"
                number="1.5"
            >
                <MathJax>
                    A <em>division ring</em> {` \\(\\mathcal{R}\\) `} is a ring with unity

                </MathJax>

            </Definition>

            <Definition 
                number="2.1" 
                title="Vector Space"
                >
                <MathJax>
                    A <em>vector space</em> {`\\(V = (\\mathcal{V}, +, *)\\)`} over
                    a field {`\\(\\mathcal{F}\\)`} is an abelian group with
                   an inner-operation{` \\(+\\) `}and an outer operation {` \\(*\\) `}:
                   {`
                   \\[
                    +: \\mathcal{V} \\times \\mathcal{V} \\rightarrow \\mathcal{V}
                   \\]
                   \\[
                    *: \\mathcal{F} \\times \\mathcal{V} \\rightarrow \\mathcal{V}
                   \\]
                    `}
                    with several properties:
                    <ol>
                        <li>{`\\((\\mathcal{V}, +)\\) `} is Abelian.</li>
                        <li>{`\\(\\mathcal{V}\\)`} is distributive with respect to {' \\(*\\)'}</li>
                        <li>The outer operation {' \\(*\\) '} is associative. </li>
                        <li>{`\\( \\exists e \\in \\mathcal{F}: \\forall x \\in \\mathcal{V}: e * x = x \\)`}</li>
                    </ol>
                </MathJax>

            </Definition>
        </CustomPage>
        
    )
}