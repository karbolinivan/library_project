import { DivComponent } from "../../common/div-component";
import "./search.css"

export class Search extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    render() {
        this.el.classList.add('search')
        this.el.innerHTML = `
            <div class="search__wrapper">
                <input 
                    type="text" 
                    placeholder="Найти книгу по автору ...." 
                    class="search__input"
                    value="${this.state.searchQuery ? this.state.searchQuery : '' }"
                />
                <img src="./static/search-black.svg" alt="Иконка поиска" />
            </div>
            <button aria-label="Искать">
                <img src="./static/search-white.svg" alt="Кнопка поиска" />
            </button>
        `;
        return this.el;
    }
}