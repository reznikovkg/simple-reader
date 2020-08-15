import { h, Component } from 'preact';
import style from './style';

export default class Reader extends Component {
	state = {
		file: null,
		textRender: ''
	};


	handleFile = (e) => {
		const file = e.target.files[0];
		let reader = new FileReader();
		reader.readAsText(file, "UTF-8");


		reader.onload = () => {
			let t = new DOMParser();
			const htmlSections1 = t.parseFromString(reader.result, 'text/xml');
			document.getElementById('content').append(htmlSections1.childNodes[0]);
		};

	}

	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<input type="file" onchange={ this.handleFile }/>
				<div id="content"></div>
			</div>
		);
	}
}
