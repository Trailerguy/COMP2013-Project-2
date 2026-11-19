import type { FormComponentProps } from "./ThriftHappensApp";
import {type Fit, ClothingCategory, type ClothingSize} from "../data/data";

const fit: Fit[] = ["men", "women", "kids"];
const clothingCategory: ClothingCategory[] = [
    "hoodie",
    "pants",
    "shift",
    "shorts",
    "t-shirt",
];
const clothingSize: ClothingSize[] = ["XS", "S", "M", "L", "XL", "XXL"];

export default function FormComponent({
    clothesArtitcle,
    handleOnSubmit,
    handleOnChange,
}: FormComponentProps) {
    return <div>
        <form action="" onSubmit={handleOnSubmit}>
            <label htmlFor="name">Name: </label>
            <input
            type="text"
            name="name"
            id="name"
            value={clothesArtitcle.name}
            onChange={handleOnChange}
            />
            <br />
            <label htmlFor="image">Image: </label>
            <input
            type="text"
            name="image"
            id="image"
            value={clothesArtitcle.image}
            onChange={handleOnChange}
            />
            <br />
            <label htmlFor="fit">Fit:</label>
            <select
            name="fit"
            id="fit"
            value={clothesArtitcle.fit}
            onChange={handleOnChange}
            >
                {fit.map((fit) => (<option
                key={fit}
                value={fit}
                >{fit}</option>
                ))}
            </select>
            <br />
            <label htmlFor="category">Category: </label>
            <select
            name="category"
            id="category"
            value={clothesArtitcle.category}
            onChange={handleOnChange}
            >
                {ClothingCategory.map((category) => (
                    <option key={category}
                    value={category}
                    >{category}
                    </option>
                ))}
            </select>
        </form>
    </div>
}