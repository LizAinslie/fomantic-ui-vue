import Vue from 'vue';
import Emoji from '@/components/Emoji';
import Flag from '@/components/Flag';
import Icon from '@/components/Icon';
import Loader from '@/components/Loader';
import Container from '@/components/Container';
import Segment from '@/components/Segment';
import Image from '@/components/Image';

const components = {
	'fui-emoji': Emoji,
	'fui-flag': Flag,
	'fui-icon': Icon,
	'fui-loader': Loader,
	'fui-container': Container,
	'fui-segment': Segment,
	'fui-image': Image,
};

Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
});

export default components;
