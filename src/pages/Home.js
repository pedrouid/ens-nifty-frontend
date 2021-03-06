import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import BaseLayout from '../layouts/base';
import Button from '../components/Button';
import {metamaskConnectInit} from '../reducers/_metamask';
import {fonts} from '../styles';
import {resolveNameOrAddr} from '../helpers/contracts/ens';

const StyledLanding = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ConnectButton = styled(Button)`
  border-radius: 8px;
  font-size: ${fonts.size.medium};
  height: 44px;
  margin: 50px 0;
`;

class Home extends Component {
  render = () => (
    <BaseLayout>
      <StyledLanding>
        <h1>
          Tokenize your ENS domain
          <br />
          and trade it as an NFT
        </h1>
        <ConnectButton
          left
          color="orange"
          onClick={() => resolveNameOrAddr('ryan-le.eth')}
          // onClick={this.props.metamaskConnectInit}
        >
          {'Connect to Metamask'}
        </ConnectButton>
      </StyledLanding>
    </BaseLayout>
  );
}

Home.propTypes = {
  metamaskConnectInit: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    metamaskConnectInit,
  },
)(Home);
