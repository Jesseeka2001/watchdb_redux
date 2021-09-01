import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import GenreFilter from './GenreFilter'
import { fetchGenres, setGenre } from '../actions/genreActions';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../styling/navigation.css'


const Genres = (props) => {
    const dispatch = useDispatch()
    const [current, setCurrent] = useState([])

    useEffect(() => {
        props.fetchGenres()
    }, [props])


    const onToggleGenre = useCallback(
        (item) => {
            let selectedGenre = []
            const index = selectedGenre.indexOf(item);
            index > -1 ? selectedGenre.splice(index, 1) : selectedGenre.push(item);

            dispatch(setGenre([...current, selectedGenre[0]]))
            setCurrent([...current, selectedGenre[0]])
            highlightSelection([...current, selectedGenre[0]])
        },
        [current, dispatch]
    )


    function highlightSelection  (props) {
        const tags = document.querySelectorAll('.tag');

        tags.forEach(tag => {
            tag.classList.remove('highlight')
        })
        props.length !== 0 && props.forEach(id => {
            const hightlightedTag = document.getElementById(id);
            hightlightedTag.classList.add('highlight');
        })
    }


    return (
        <div>
            <div className="header" >
                <div id="genr">
                    <button className="genre">   Genre </button>
                    {props.genres.map(item => (
                        <div key={item.id} >
                            <button className='tag' id={item.id}
                                onClick={() => {
                                    onToggleGenre(item.id);
                                }
                                }>
                                {item.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <GenreFilter />
        </div>
    );
}

Genres.propTypes = {
    fetchGenres: PropTypes.func.isRequired,
    genres: PropTypes.array.isRequired,
}
const mapStateToProps = state => ({
    genres: state.genres.items
})

export default connect(mapStateToProps, { fetchGenres })(Genres);

