import React from "react"
import { AppBar, Toolbar, CssBaseline, IconButton, Typography } from '@material-ui/core'


const Cocina = () => {
    return (
        <>
			<CssBaseline />
			<AppBar color='secondary'>
				<Toolbar>
					<IconButton edge='start' color='inherit'>
						
					</IconButton>
					<Typography style={{ flexGrow: 1 }}>Burger Quenn</Typography>
					
				</Toolbar>
			</AppBar>
		</>
    )
}

export default Cocina
