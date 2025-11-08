import { MathJax } from "better-react-mathjax";
import CustomPage from "../components/CustomPage";
import Definition from "../components/Definition";


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
            <Definition 
                number="1.3" 
                title="Vector Space"
                >
                <MathJax>
                    A <em>vector space</em> {`\\(\\mathcal{V}\\)`} over
                    a field {`\\(\\mathcal{F}\\)`} is an abelian group with a
                    scalar product {`\\(\\alpha \\in \\mathcal{F}\\)`}
                </MathJax>

            </Definition>
        </CustomPage>
        
    )
}