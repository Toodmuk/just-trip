import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';
import { Plus } from 'lucide-react-native';
import Step1Province from '../../lib/plan/Step1Province';
import Step2Transport from '../../lib/plan/Step2Transport';
import Step3Budget from '../../lib/plan/Step3Budget';
import Step4Friends from '../../lib/plan/Step4Friends';
import Step5Places from '../../lib/plan/Step5Places';
import { styles } from '../../lib/plan/styles';

export default function PlanScreen() {
  const [plans, setPlans] = useState<string[]>([]);
  const [creatingPlan, setCreatingPlan] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Form state
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [transportType, setTransportType] = useState<string | null>(null);
  const [budget, setBudget] = useState<string>('');
  const [friendInput, setFriendInput] = useState('');
  const [invitedFriends, setInvitedFriends] = useState<string[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);

  const handleCreatePlan = () => {
    if (plans.length >= 4) return;

    // Reset form state
    setCreatingPlan(true);
    setCurrentStep(1);
    setSelectedProvince(null);
    setTransportType(null);
    setBudget('');
    setFriendInput('');
    setInvitedFriends([]);
    setSelectedPlaces([]);
  };

  const handleFinishPlan = () => {
    const newPlan =
      `${selectedProvince} Trip by ${transportType} – ฿${budget}/person\n` +
      `Friends: ${invitedFriends.join(', ') || 'None'}\n` +
      `Places: ${selectedPlaces.join(', ') || 'None'}`;
    setPlans([...plans, newPlan]);
    setCreatingPlan(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Plans</Text>

      {!creatingPlan ? (
        <>
          {plans.length > 0 ? (
            <FlatList
              data={plans}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Text style={styles.planItem}>{item}</Text>
              )}
            />
          ) : (
            <Text style={styles.noPlans}>You have no plans yet.</Text>
          )}

          <View style={styles.createButtonRow}>
            <Plus color="black" size={20} />
            <Button
              title="Create Plan"
              onPress={handleCreatePlan}
              disabled={plans.length >= 4}
            />
          </View>

          {plans.length >= 4 && (
            <Text style={styles.limitText}>
              You can only create up to 4 plans.
            </Text>
          )}
        </>
      ) : (
        <>
          {currentStep === 1 && (
            <Step1Province
              selectedProvince={selectedProvince}
              setSelectedProvince={setSelectedProvince}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <Step2Transport
              transportType={transportType}
              setTransportType={setTransportType}
              onNext={() => setCurrentStep(3)}
            />
          )}

          {currentStep === 3 && (
            <Step3Budget
              budget={budget}
              setBudget={setBudget}
              onNext={() => setCurrentStep(4)}
            />
          )}

          {currentStep === 4 && (
            <Step4Friends
              friendInput={friendInput}
              setFriendInput={setFriendInput}
              invitedFriends={invitedFriends}
              setInvitedFriends={setInvitedFriends}
              onNext={() => setCurrentStep(5)}
            />
          )}

          {currentStep === 5 && selectedProvince && (
            <Step5Places
              selectedProvince={selectedProvince}
              selectedPlaces={selectedPlaces}
              setSelectedPlaces={setSelectedPlaces}
              onFinish={handleFinishPlan}
            />
          )}
        </>
      )}
    </View>
  );
}
