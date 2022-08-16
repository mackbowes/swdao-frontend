import { Box, Flex, Image, Spacer, useDisclosure } from '@chakra-ui/react';
import { A, navigate, usePath } from 'hookrouter';
import { useMemo, useEffect, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import useImage from 'react-use-image';
import styles from './Header.module.scss';
import { useWindowSize } from 'react-use';

// import { SearchField } from '../../atoms/SearchField'
// import { NetworkChanger } from '../../molecules/NetworkChanger';
// import WalletButton from '../../molecules/WalletButton/WalletButton'
import { HeaderLink } from './HeaderLink';
import { ModalMenu } from './ModalMenu';
export const SIDE_PADDING = {
	sm: '1rem',
	md: '2rem',
	lg: '6rem',
	xl: '10rem',
};
export const WIDTHS = {
	sm: '100%',
	md: '100%',
	lg: '100%',
	xl: '100%',
};
const walletIcon = <Image src="/images/swd-logo-sm-white.png" alt="SW DAO Logo" h="25px" />;

const getPathKey = (path) => {
	const pathParts = path.split('/');
	if (!pathParts) {
		return 'products';
	}
	let pathKey = pathParts.shift();
	// ignore site part of url
	while (pathKey === 'site' || pathKey === '') pathKey = pathParts.shift();
	// drop querystrings
	if (pathKey && pathKey.indexOf('?') > -1) pathKey = pathKey.split('?')[0];
	if (pathKey === 'product') pathKey = 'products';
	return pathKey || 'products';
};

export function Header(props) {
	const [isMobile, setIsMobile] = useState();
	const [breakpoint, setBreakpont] = useState('xl');
	const { width, height } = useWindowSize();
	const path = usePath();
	const pathKey = getPathKey(path);
	const { isOpen, onOpen, onClose } = useDisclosure();
	useImage('/images/swd-logo.png');
	useImage('/images/swd-logo-text.png');
	useImage('/images/swd-logo-sm-white.png');

	useEffect(() => {
		if (width <= 1440) setBreakpont('xl');
		if (width <= 1280) setBreakpont('lg');
		if (width <= 1024) setBreakpont('md');
		if (width <= 720) setBreakpont('sm');
		if (width <= 1024) {
			setIsMobile(true);
		}
		if (width > 1024) {
			setIsMobile(false);
		}
	}, [width]);
	function handleSearch(token) {
		if (token === 'SWD') {
			navigate('/token');
		} else {
			navigate(`/product/${token}`);
		}
	}

	const swdLogo = useMemo(
		() => (breakpoint === 'xl' ? '/images/swd-logo-text.png' : '/images/swd-logo.png'),
		[breakpoint],
	);

	const links = useMemo(() => {
		const links =
			breakpoint !== 'sm'
				? [
						<HeaderLink
							key="products"
							page="Products"
							//   url="/"
							isActive={path === 'products'}
						/>,
						<Spacer key="spc2" />,
						<HeaderLink key="token" page="Token" isActive={path === 'token'} />,
						<Spacer key="spc1" />,
						<HeaderLink key="portfolio" page="Portfolio" isActive={path === 'portfolio'} />,
						<Spacer key="spc" />,
						<HeaderLink key="bonds" page="bonds" isActive={path === ''} />,
						<Spacer key="spc" />,
				  ]
				: [];
		if (['lg', 'xl'].includes(breakpoint)) {
			links.push(
				<Box
					key="search"
					className={isMobile ? 'mobile' : 'desktop'}
					width={[0, 0, '11rem', '14rem']}
					textAlign="left"
					bgColor="transparent"
					borderRadius="max"
					borderColor="#fff"
					position="relative"
					marginTop="-0.3rem"
				>
					{/* <SearchField
                        absolute
                        label="Search"
                        top="0"
                        width={[null, null, '11rem', '14rem']}
                        onChange={handleSearch}
                        longLabel={true}
                        zIndex={20}
                        mobile={false}
                    /> */}
				</Box>,
			);
		}
		links.push(<Spacer key="spc3" />);
		// links.push(<NetworkChanger key="networkchange" />);
		// links.push(
		//     <WalletButton key="wallet" variant="primary" icon={walletIcon} />
		// )
		if (['sm', 'md'].includes(breakpoint)) {
			links.push(
				<Box
					as={HiOutlineMenu}
					key="menu"
					size="1.5rem"
					color="white"
					onClick={onOpen}
					_hover={{ color: '#AADCFE', cursor: 'pointer' }}
					ml="1rem"
					marginTop=".25rem"
				/>,
			);
		}
		return links;
	}, [breakpoint, isMobile, onOpen, pathKey]);

	return (
		<Box margin="0.5 auto" padding={`0.5em ${SIDE_PADDING[breakpoint]}`}>
			<Flex
				flexFlow="row nowrap"
				className={styles.header}
				justify="space-between"
				height="80px"
				width={WIDTHS[breakpoint]}
				maxWidth="1440px"
				fontSize="1.5rem"
				verticalAlign="middle"
				lineHeight="1.5rem"
				marginTop="1.2rem"
			>
				<A href="/">
					<Image
						src={swdLogo}
						d="inline-block"
						h="90px"
						padding="0 0 1rem 0"
						lineHeight="80px"
						marginTop="-1.2rem"
					/>
				</A>
				<Spacer />
				{links}
			</Flex>
			<ModalMenu
				breakpoint={breakpoint}
				isOpen={isOpen}
				onClose={onClose}
				handleSearch={handleSearch}
				pathKey={pathKey}
				mobile={isMobile}
			/>
		</Box>
	);
}
