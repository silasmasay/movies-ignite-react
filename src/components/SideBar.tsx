import './../styles/sidebar.scss';

import { Button } from './Button';

interface GenreResponseProps {
	id: number;
	name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
	title: string;
  }

interface SideBar {
	selectedGenreId: number;
	genres: GenreResponseProps[];
	handleClickButton: (id: number) => void;
} 

export function SideBar({ selectedGenreId, genres, handleClickButton }: SideBar) {
	return (
		<nav className="sidebar">
			<span>Watch<p>Me</p></span>

			<div className="buttons-container">
			{genres.map(genre => (
				<Button
				key={String(genre.id)}
				title={genre.title}
				iconName={genre.name}
				onClick={() => handleClickButton(genre.id)}
				selected={selectedGenreId === genre.id}
				/>
			))}
			</div>
		</nav>
	);
}