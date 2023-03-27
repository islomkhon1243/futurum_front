import React from 'react';
import styled from 'styled-components';

const PricingContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Plan = styled.div`
  width: 30%;
  background-color: #ffffff;
  padding: 2rem;
  text-align: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PlanPrice = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const PlanFeature = styled.li`
  margin-bottom: 0.5rem;
`;

const PlanButton = styled.button`
  background-color: #6c63ff;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
`;

function Pricing() {
    return (
        <PricingContainer>
            <Plan>
                <PlanTitle>Basic</PlanTitle>
                <PlanPrice>$10/month</PlanPrice>
                <PlanFeatures>
                    <PlanFeature>Feature 1</PlanFeature>
                    <PlanFeature>Feature 2</PlanFeature>
                    <PlanFeature>Feature 3</PlanFeature>
                </PlanFeatures>
                <PlanButton>Sign up</PlanButton>
            </Plan>
            <Plan>
                <PlanTitle>Pro</PlanTitle>
                <PlanPrice>$20/month</PlanPrice>
                <PlanFeatures>
                    <PlanFeature>Feature 1</PlanFeature>
                    <PlanFeature>Feature 2</PlanFeature>
                    <PlanFeature>Feature 3</PlanFeature>
                    <PlanFeature>Feature 4</PlanFeature>
                </PlanFeatures>
                <PlanButton>Sign up</PlanButton>
            </Plan>
            <Plan>
                <PlanTitle>Premium</PlanTitle>
                <PlanPrice>$30/month</PlanPrice>
                <PlanFeatures>
                    <PlanFeature>Feature 1</PlanFeature>
                    <PlanFeature>Feature 2</PlanFeature>
                    <PlanFeature>Feature 3</PlanFeature>
                    <PlanFeature>Feature 4</PlanFeature>
                    <PlanFeature>Feature 5</PlanFeature>
                </PlanFeatures>
                <PlanButton>Sign up</PlanButton>
            </Plan>
        </PricingContainer>
    );
}

export default Pricing;
