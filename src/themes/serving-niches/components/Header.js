import React from 'react';

import Menu from '@react-website-themes/default/components/Menu';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import ServingNichesLogo from '../../../../static/logo.png';
import Header from '@react-website-themes/default/components/Header';


const servingNichesHeader = props => {
	return (
		<div>
			<Header>
				<img src={ServingNichesLogo} alt={'serving niches logo'} width={132} height={81}/>
        		<Menu items={menuItems} />
        	</Header>
		</div>
	);
};

export default servingNichesHeader;