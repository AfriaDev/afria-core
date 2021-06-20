// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/AfriaPoolImmutables.sol';
import './pool/AfriaPoolState.sol';
import './pool/AfriaPoolDerivedState.sol';
import './pool/AfriaPoolActions.sol';
import './pool/AfriaPoolOwnerActions.sol';
import './pool/AfriaPoolEvents.sol';

/// @title The interface for a Afria V3 Pool
/// @notice A Afria pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IAfriaPool is
    AfriaPoolImmutables,
    AfriaPoolState,
    AfriaPoolDerivedState,
    AfriaPoolActions,
    AfriaPoolOwnerActions,
    AfriaPoolEvents
{

}
